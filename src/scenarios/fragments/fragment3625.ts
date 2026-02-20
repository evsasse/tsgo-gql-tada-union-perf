import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3623 } from "./fragment3623";
import type { FragmentToken3624 } from "./fragment3624";

export const FRAGMENT_3625 = gql(`
  fragment Fragment3625 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult3625 = ResultOf<typeof FRAGMENT_3625>;
type FragmentSelf3625 = NonNullable<FragmentResult3625>;

export type FragmentToken3625 =
  | FragmentSelf3625["__typename"]
  | FragmentSelf3625["typenameHint"] | FragmentToken3623 | FragmentToken3624;
