import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1372 } from "./fragment1372";
import type { FragmentToken1373 } from "./fragment1373";

export const FRAGMENT_1374 = gql(`
  fragment Fragment1374 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult1374 = ResultOf<typeof FRAGMENT_1374>;
type FragmentSelf1374 = NonNullable<FragmentResult1374>;

export type FragmentToken1374 =
  | FragmentSelf1374["__typename"]
  | FragmentSelf1374["typenameHint"] | FragmentToken1372 | FragmentToken1373;
