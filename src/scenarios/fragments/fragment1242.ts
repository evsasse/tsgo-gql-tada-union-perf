import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1240 } from "./fragment1240";
import type { FragmentToken1241 } from "./fragment1241";

export const FRAGMENT_1242 = gql(`
  fragment Fragment1242 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult1242 = ResultOf<typeof FRAGMENT_1242>;
type FragmentSelf1242 = NonNullable<FragmentResult1242>;

export type FragmentToken1242 =
  | FragmentSelf1242["__typename"]
  | FragmentSelf1242["typenameHint"] | FragmentToken1240 | FragmentToken1241;
