import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3902 } from "./fragment3902";
import type { FragmentToken3903 } from "./fragment3903";

export const FRAGMENT_3904 = gql(`
  fragment Fragment3904 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult3904 = ResultOf<typeof FRAGMENT_3904>;
type FragmentSelf3904 = NonNullable<FragmentResult3904>;

export type FragmentToken3904 =
  | FragmentSelf3904["__typename"]
  | FragmentSelf3904["typenameHint"] | FragmentToken3902 | FragmentToken3903;
