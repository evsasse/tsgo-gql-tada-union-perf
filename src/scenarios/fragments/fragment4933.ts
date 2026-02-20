import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4931 } from "./fragment4931";
import type { FragmentToken4932 } from "./fragment4932";

export const FRAGMENT_4933 = gql(`
  fragment Fragment4933 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult4933 = ResultOf<typeof FRAGMENT_4933>;
type FragmentSelf4933 = NonNullable<FragmentResult4933>;

export type FragmentToken4933 =
  | FragmentSelf4933["__typename"]
  | FragmentSelf4933["typenameHint"] | FragmentToken4931 | FragmentToken4932;
