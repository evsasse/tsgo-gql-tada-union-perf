import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken187 } from "./fragment187";
import type { FragmentToken188 } from "./fragment188";

export const FRAGMENT_189 = gql(`
  fragment Fragment189 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult189 = ResultOf<typeof FRAGMENT_189>;
type FragmentSelf189 = NonNullable<FragmentResult189>;

export type FragmentToken189 =
  | FragmentSelf189["__typename"]
  | FragmentSelf189["typenameHint"] | FragmentToken187 | FragmentToken188;
