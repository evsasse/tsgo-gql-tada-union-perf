import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4370 } from "./fragment4370";
import type { FragmentToken4371 } from "./fragment4371";

export const FRAGMENT_4372 = gql(`
  fragment Fragment4372 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult4372 = ResultOf<typeof FRAGMENT_4372>;
type FragmentSelf4372 = NonNullable<FragmentResult4372>;

export type FragmentToken4372 =
  | FragmentSelf4372["__typename"]
  | FragmentSelf4372["typenameHint"] | FragmentToken4370 | FragmentToken4371;
