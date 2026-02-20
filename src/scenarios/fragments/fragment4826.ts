import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4824 } from "./fragment4824";
import type { FragmentToken4825 } from "./fragment4825";

export const FRAGMENT_4826 = gql(`
  fragment Fragment4826 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult4826 = ResultOf<typeof FRAGMENT_4826>;
type FragmentSelf4826 = NonNullable<FragmentResult4826>;

export type FragmentToken4826 =
  | FragmentSelf4826["__typename"]
  | FragmentSelf4826["typenameHint"] | FragmentToken4824 | FragmentToken4825;
