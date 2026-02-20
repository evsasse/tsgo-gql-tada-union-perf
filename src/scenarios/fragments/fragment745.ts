import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken743 } from "./fragment743";
import type { FragmentToken744 } from "./fragment744";

export const FRAGMENT_745 = gql(`
  fragment Fragment745 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult745 = ResultOf<typeof FRAGMENT_745>;
type FragmentSelf745 = NonNullable<FragmentResult745>;

export type FragmentToken745 =
  | FragmentSelf745["__typename"]
  | FragmentSelf745["typenameHint"] | FragmentToken743 | FragmentToken744;
