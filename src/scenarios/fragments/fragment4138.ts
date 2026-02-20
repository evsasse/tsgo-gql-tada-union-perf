import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4136 } from "./fragment4136";
import type { FragmentToken4137 } from "./fragment4137";

export const FRAGMENT_4138 = gql(`
  fragment Fragment4138 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult4138 = ResultOf<typeof FRAGMENT_4138>;
type FragmentSelf4138 = NonNullable<FragmentResult4138>;

export type FragmentToken4138 =
  | FragmentSelf4138["__typename"]
  | FragmentSelf4138["typenameHint"] | FragmentToken4136 | FragmentToken4137;
