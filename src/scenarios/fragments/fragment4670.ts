import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4668 } from "./fragment4668";
import type { FragmentToken4669 } from "./fragment4669";

export const FRAGMENT_4670 = gql(`
  fragment Fragment4670 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult4670 = ResultOf<typeof FRAGMENT_4670>;
type FragmentSelf4670 = NonNullable<FragmentResult4670>;

export type FragmentToken4670 =
  | FragmentSelf4670["__typename"]
  | FragmentSelf4670["typenameHint"] | FragmentToken4668 | FragmentToken4669;
