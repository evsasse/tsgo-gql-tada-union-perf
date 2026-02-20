import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4154 } from "./fragment4154";
import type { FragmentToken4155 } from "./fragment4155";

export const FRAGMENT_4156 = gql(`
  fragment Fragment4156 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult4156 = ResultOf<typeof FRAGMENT_4156>;
type FragmentSelf4156 = NonNullable<FragmentResult4156>;

export type FragmentToken4156 =
  | FragmentSelf4156["__typename"]
  | FragmentSelf4156["typenameHint"] | FragmentToken4154 | FragmentToken4155;
