import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3903 } from "./fragment3903";
import type { FragmentToken3904 } from "./fragment3904";

export const FRAGMENT_3905 = gql(`
  fragment Fragment3905 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult3905 = ResultOf<typeof FRAGMENT_3905>;
type FragmentSelf3905 = NonNullable<FragmentResult3905>;

export type FragmentToken3905 =
  | FragmentSelf3905["__typename"]
  | FragmentSelf3905["typenameHint"] | FragmentToken3903 | FragmentToken3904;
