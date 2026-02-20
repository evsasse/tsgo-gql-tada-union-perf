import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken190 } from "./fragment190";
import type { FragmentToken191 } from "./fragment191";

export const FRAGMENT_192 = gql(`
  fragment Fragment192 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult192 = ResultOf<typeof FRAGMENT_192>;
type FragmentSelf192 = NonNullable<FragmentResult192>;

export type FragmentToken192 =
  | FragmentSelf192["__typename"]
  | FragmentSelf192["typenameHint"] | FragmentToken190 | FragmentToken191;
