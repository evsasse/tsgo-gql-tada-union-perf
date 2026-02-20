import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4150 } from "./fragment4150";
import type { FragmentToken4151 } from "./fragment4151";

export const FRAGMENT_4152 = gql(`
  fragment Fragment4152 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult4152 = ResultOf<typeof FRAGMENT_4152>;
type FragmentSelf4152 = NonNullable<FragmentResult4152>;

export type FragmentToken4152 =
  | FragmentSelf4152["__typename"]
  | FragmentSelf4152["typenameHint"] | FragmentToken4150 | FragmentToken4151;
