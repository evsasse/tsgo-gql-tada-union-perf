import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4825 } from "./fragment4825";
import type { FragmentToken4826 } from "./fragment4826";

export const FRAGMENT_4827 = gql(`
  fragment Fragment4827 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult4827 = ResultOf<typeof FRAGMENT_4827>;
type FragmentSelf4827 = NonNullable<FragmentResult4827>;

export type FragmentToken4827 =
  | FragmentSelf4827["__typename"]
  | FragmentSelf4827["typenameHint"] | FragmentToken4825 | FragmentToken4826;
