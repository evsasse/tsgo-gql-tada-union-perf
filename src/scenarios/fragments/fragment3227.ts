import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3225 } from "./fragment3225";
import type { FragmentToken3226 } from "./fragment3226";

export const FRAGMENT_3227 = gql(`
  fragment Fragment3227 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult3227 = ResultOf<typeof FRAGMENT_3227>;
type FragmentSelf3227 = NonNullable<FragmentResult3227>;

export type FragmentToken3227 =
  | FragmentSelf3227["__typename"]
  | FragmentSelf3227["typenameHint"] | FragmentToken3225 | FragmentToken3226;
