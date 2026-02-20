import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken220 } from "./fragment220";
import type { FragmentToken221 } from "./fragment221";

export const FRAGMENT_222 = gql(`
  fragment Fragment222 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult222 = ResultOf<typeof FRAGMENT_222>;
type FragmentSelf222 = NonNullable<FragmentResult222>;

export type FragmentToken222 =
  | FragmentSelf222["__typename"]
  | FragmentSelf222["typenameHint"] | FragmentToken220 | FragmentToken221;
