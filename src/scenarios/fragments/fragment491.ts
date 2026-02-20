import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken489 } from "./fragment489";
import type { FragmentToken490 } from "./fragment490";

export const FRAGMENT_491 = gql(`
  fragment Fragment491 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult491 = ResultOf<typeof FRAGMENT_491>;
type FragmentSelf491 = NonNullable<FragmentResult491>;

export type FragmentToken491 =
  | FragmentSelf491["__typename"]
  | FragmentSelf491["typenameHint"] | FragmentToken489 | FragmentToken490;
