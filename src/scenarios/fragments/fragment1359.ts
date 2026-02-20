import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1357 } from "./fragment1357";
import type { FragmentToken1358 } from "./fragment1358";

export const FRAGMENT_1359 = gql(`
  fragment Fragment1359 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult1359 = ResultOf<typeof FRAGMENT_1359>;
type FragmentSelf1359 = NonNullable<FragmentResult1359>;

export type FragmentToken1359 =
  | FragmentSelf1359["__typename"]
  | FragmentSelf1359["typenameHint"] | FragmentToken1357 | FragmentToken1358;
