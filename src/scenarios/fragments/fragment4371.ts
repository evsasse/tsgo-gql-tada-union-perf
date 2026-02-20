import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4369 } from "./fragment4369";
import type { FragmentToken4370 } from "./fragment4370";

export const FRAGMENT_4371 = gql(`
  fragment Fragment4371 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult4371 = ResultOf<typeof FRAGMENT_4371>;
type FragmentSelf4371 = NonNullable<FragmentResult4371>;

export type FragmentToken4371 =
  | FragmentSelf4371["__typename"]
  | FragmentSelf4371["typenameHint"] | FragmentToken4369 | FragmentToken4370;
