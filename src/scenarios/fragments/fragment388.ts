import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken386 } from "./fragment386";
import type { FragmentToken387 } from "./fragment387";

export const FRAGMENT_388 = gql(`
  fragment Fragment388 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult388 = ResultOf<typeof FRAGMENT_388>;
type FragmentSelf388 = NonNullable<FragmentResult388>;

export type FragmentToken388 =
  | FragmentSelf388["__typename"]
  | FragmentSelf388["typenameHint"] | FragmentToken386 | FragmentToken387;
