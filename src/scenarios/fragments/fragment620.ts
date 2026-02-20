import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken618 } from "./fragment618";
import type { FragmentToken619 } from "./fragment619";

export const FRAGMENT_620 = gql(`
  fragment Fragment620 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult620 = ResultOf<typeof FRAGMENT_620>;
type FragmentSelf620 = NonNullable<FragmentResult620>;

export type FragmentToken620 =
  | FragmentSelf620["__typename"]
  | FragmentSelf620["typenameHint"] | FragmentToken618 | FragmentToken619;
