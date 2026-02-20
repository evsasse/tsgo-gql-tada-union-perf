import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1385 } from "./fragment1385";
import type { FragmentToken1386 } from "./fragment1386";

export const FRAGMENT_1387 = gql(`
  fragment Fragment1387 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult1387 = ResultOf<typeof FRAGMENT_1387>;
type FragmentSelf1387 = NonNullable<FragmentResult1387>;

export type FragmentToken1387 =
  | FragmentSelf1387["__typename"]
  | FragmentSelf1387["typenameHint"] | FragmentToken1385 | FragmentToken1386;
