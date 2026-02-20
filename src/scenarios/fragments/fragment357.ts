import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken355 } from "./fragment355";
import type { FragmentToken356 } from "./fragment356";

export const FRAGMENT_357 = gql(`
  fragment Fragment357 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult357 = ResultOf<typeof FRAGMENT_357>;
type FragmentSelf357 = NonNullable<FragmentResult357>;

export type FragmentToken357 =
  | FragmentSelf357["__typename"]
  | FragmentSelf357["typenameHint"] | FragmentToken355 | FragmentToken356;
