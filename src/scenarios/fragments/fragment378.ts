import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken376 } from "./fragment376";
import type { FragmentToken377 } from "./fragment377";

export const FRAGMENT_378 = gql(`
  fragment Fragment378 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult378 = ResultOf<typeof FRAGMENT_378>;
type FragmentSelf378 = NonNullable<FragmentResult378>;

export type FragmentToken378 =
  | FragmentSelf378["__typename"]
  | FragmentSelf378["typenameHint"] | FragmentToken376 | FragmentToken377;
