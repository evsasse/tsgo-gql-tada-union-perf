import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3622 } from "./fragment3622";
import type { FragmentToken3623 } from "./fragment3623";

export const FRAGMENT_3624 = gql(`
  fragment Fragment3624 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult3624 = ResultOf<typeof FRAGMENT_3624>;
type FragmentSelf3624 = NonNullable<FragmentResult3624>;

export type FragmentToken3624 =
  | FragmentSelf3624["__typename"]
  | FragmentSelf3624["typenameHint"] | FragmentToken3622 | FragmentToken3623;
