import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3670 } from "./fragment3670";
import type { FragmentToken3671 } from "./fragment3671";

export const FRAGMENT_3672 = gql(`
  fragment Fragment3672 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult3672 = ResultOf<typeof FRAGMENT_3672>;
type FragmentSelf3672 = NonNullable<FragmentResult3672>;

export type FragmentToken3672 =
  | FragmentSelf3672["__typename"]
  | FragmentSelf3672["typenameHint"] | FragmentToken3670 | FragmentToken3671;
