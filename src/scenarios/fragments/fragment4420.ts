import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4418 } from "./fragment4418";
import type { FragmentToken4419 } from "./fragment4419";

export const FRAGMENT_4420 = gql(`
  fragment Fragment4420 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult4420 = ResultOf<typeof FRAGMENT_4420>;
type FragmentSelf4420 = NonNullable<FragmentResult4420>;

export type FragmentToken4420 =
  | FragmentSelf4420["__typename"]
  | FragmentSelf4420["typenameHint"] | FragmentToken4418 | FragmentToken4419;
