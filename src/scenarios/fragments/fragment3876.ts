import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3874 } from "./fragment3874";
import type { FragmentToken3875 } from "./fragment3875";

export const FRAGMENT_3876 = gql(`
  fragment Fragment3876 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult3876 = ResultOf<typeof FRAGMENT_3876>;
type FragmentSelf3876 = NonNullable<FragmentResult3876>;

export type FragmentToken3876 =
  | FragmentSelf3876["__typename"]
  | FragmentSelf3876["typenameHint"] | FragmentToken3874 | FragmentToken3875;
