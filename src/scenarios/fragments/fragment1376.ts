import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1374 } from "./fragment1374";
import type { FragmentToken1375 } from "./fragment1375";

export const FRAGMENT_1376 = gql(`
  fragment Fragment1376 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult1376 = ResultOf<typeof FRAGMENT_1376>;
type FragmentSelf1376 = NonNullable<FragmentResult1376>;

export type FragmentToken1376 =
  | FragmentSelf1376["__typename"]
  | FragmentSelf1376["typenameHint"] | FragmentToken1374 | FragmentToken1375;
