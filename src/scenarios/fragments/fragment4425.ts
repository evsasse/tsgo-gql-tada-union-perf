import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4423 } from "./fragment4423";
import type { FragmentToken4424 } from "./fragment4424";

export const FRAGMENT_4425 = gql(`
  fragment Fragment4425 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult4425 = ResultOf<typeof FRAGMENT_4425>;
type FragmentSelf4425 = NonNullable<FragmentResult4425>;

export type FragmentToken4425 =
  | FragmentSelf4425["__typename"]
  | FragmentSelf4425["typenameHint"] | FragmentToken4423 | FragmentToken4424;
