import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3857 } from "./fragment3857";
import type { FragmentToken3858 } from "./fragment3858";

export const FRAGMENT_3859 = gql(`
  fragment Fragment3859 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult3859 = ResultOf<typeof FRAGMENT_3859>;
type FragmentSelf3859 = NonNullable<FragmentResult3859>;

export type FragmentToken3859 =
  | FragmentSelf3859["__typename"]
  | FragmentSelf3859["typenameHint"] | FragmentToken3857 | FragmentToken3858;
