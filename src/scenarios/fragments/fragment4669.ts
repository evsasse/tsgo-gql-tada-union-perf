import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4667 } from "./fragment4667";
import type { FragmentToken4668 } from "./fragment4668";

export const FRAGMENT_4669 = gql(`
  fragment Fragment4669 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult4669 = ResultOf<typeof FRAGMENT_4669>;
type FragmentSelf4669 = NonNullable<FragmentResult4669>;

export type FragmentToken4669 =
  | FragmentSelf4669["__typename"]
  | FragmentSelf4669["typenameHint"] | FragmentToken4667 | FragmentToken4668;
