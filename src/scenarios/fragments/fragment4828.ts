import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4826 } from "./fragment4826";
import type { FragmentToken4827 } from "./fragment4827";

export const FRAGMENT_4828 = gql(`
  fragment Fragment4828 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult4828 = ResultOf<typeof FRAGMENT_4828>;
type FragmentSelf4828 = NonNullable<FragmentResult4828>;

export type FragmentToken4828 =
  | FragmentSelf4828["__typename"]
  | FragmentSelf4828["typenameHint"] | FragmentToken4826 | FragmentToken4827;
