import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4491 } from "./fragment4491";
import type { FragmentToken4492 } from "./fragment4492";

export const FRAGMENT_4493 = gql(`
  fragment Fragment4493 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult4493 = ResultOf<typeof FRAGMENT_4493>;
type FragmentSelf4493 = NonNullable<FragmentResult4493>;

export type FragmentToken4493 =
  | FragmentSelf4493["__typename"]
  | FragmentSelf4493["typenameHint"] | FragmentToken4491 | FragmentToken4492;
