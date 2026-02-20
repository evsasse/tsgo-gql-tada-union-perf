import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3142 } from "./fragment3142";
import type { FragmentToken3143 } from "./fragment3143";

export const FRAGMENT_3144 = gql(`
  fragment Fragment3144 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult3144 = ResultOf<typeof FRAGMENT_3144>;
type FragmentSelf3144 = NonNullable<FragmentResult3144>;

export type FragmentToken3144 =
  | FragmentSelf3144["__typename"]
  | FragmentSelf3144["typenameHint"] | FragmentToken3142 | FragmentToken3143;
