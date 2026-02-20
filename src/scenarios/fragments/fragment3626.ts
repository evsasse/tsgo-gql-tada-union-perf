import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3624 } from "./fragment3624";
import type { FragmentToken3625 } from "./fragment3625";

export const FRAGMENT_3626 = gql(`
  fragment Fragment3626 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult3626 = ResultOf<typeof FRAGMENT_3626>;
type FragmentSelf3626 = NonNullable<FragmentResult3626>;

export type FragmentToken3626 =
  | FragmentSelf3626["__typename"]
  | FragmentSelf3626["typenameHint"] | FragmentToken3624 | FragmentToken3625;
