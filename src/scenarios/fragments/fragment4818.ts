import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4816 } from "./fragment4816";
import type { FragmentToken4817 } from "./fragment4817";

export const FRAGMENT_4818 = gql(`
  fragment Fragment4818 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult4818 = ResultOf<typeof FRAGMENT_4818>;
type FragmentSelf4818 = NonNullable<FragmentResult4818>;

export type FragmentToken4818 =
  | FragmentSelf4818["__typename"]
  | FragmentSelf4818["typenameHint"] | FragmentToken4816 | FragmentToken4817;
