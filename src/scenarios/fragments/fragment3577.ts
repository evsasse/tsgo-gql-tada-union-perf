import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3575 } from "./fragment3575";
import type { FragmentToken3576 } from "./fragment3576";

export const FRAGMENT_3577 = gql(`
  fragment Fragment3577 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult3577 = ResultOf<typeof FRAGMENT_3577>;
type FragmentSelf3577 = NonNullable<FragmentResult3577>;

export type FragmentToken3577 =
  | FragmentSelf3577["__typename"]
  | FragmentSelf3577["typenameHint"] | FragmentToken3575 | FragmentToken3576;
