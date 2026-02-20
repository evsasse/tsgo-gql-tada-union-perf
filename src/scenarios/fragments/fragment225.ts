import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken223 } from "./fragment223";
import type { FragmentToken224 } from "./fragment224";

export const FRAGMENT_225 = gql(`
  fragment Fragment225 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult225 = ResultOf<typeof FRAGMENT_225>;
type FragmentSelf225 = NonNullable<FragmentResult225>;

export type FragmentToken225 =
  | FragmentSelf225["__typename"]
  | FragmentSelf225["typenameHint"] | FragmentToken223 | FragmentToken224;
