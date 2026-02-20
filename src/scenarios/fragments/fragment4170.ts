import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4168 } from "./fragment4168";
import type { FragmentToken4169 } from "./fragment4169";

export const FRAGMENT_4170 = gql(`
  fragment Fragment4170 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult4170 = ResultOf<typeof FRAGMENT_4170>;
type FragmentSelf4170 = NonNullable<FragmentResult4170>;

export type FragmentToken4170 =
  | FragmentSelf4170["__typename"]
  | FragmentSelf4170["typenameHint"] | FragmentToken4168 | FragmentToken4169;
