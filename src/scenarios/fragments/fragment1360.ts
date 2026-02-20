import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1358 } from "./fragment1358";
import type { FragmentToken1359 } from "./fragment1359";

export const FRAGMENT_1360 = gql(`
  fragment Fragment1360 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult1360 = ResultOf<typeof FRAGMENT_1360>;
type FragmentSelf1360 = NonNullable<FragmentResult1360>;

export type FragmentToken1360 =
  | FragmentSelf1360["__typename"]
  | FragmentSelf1360["typenameHint"] | FragmentToken1358 | FragmentToken1359;
