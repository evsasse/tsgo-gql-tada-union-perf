import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken678 } from "./fragment678";
import type { FragmentToken679 } from "./fragment679";

export const FRAGMENT_680 = gql(`
  fragment Fragment680 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult680 = ResultOf<typeof FRAGMENT_680>;
type FragmentSelf680 = NonNullable<FragmentResult680>;

export type FragmentToken680 =
  | FragmentSelf680["__typename"]
  | FragmentSelf680["typenameHint"] | FragmentToken678 | FragmentToken679;
