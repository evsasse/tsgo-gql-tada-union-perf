import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken520 } from "./fragment520";
import type { FragmentToken521 } from "./fragment521";

export const FRAGMENT_522 = gql(`
  fragment Fragment522 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult522 = ResultOf<typeof FRAGMENT_522>;
type FragmentSelf522 = NonNullable<FragmentResult522>;

export type FragmentToken522 =
  | FragmentSelf522["__typename"]
  | FragmentSelf522["typenameHint"] | FragmentToken520 | FragmentToken521;
