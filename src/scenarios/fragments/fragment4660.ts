import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4658 } from "./fragment4658";
import type { FragmentToken4659 } from "./fragment4659";

export const FRAGMENT_4660 = gql(`
  fragment Fragment4660 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult4660 = ResultOf<typeof FRAGMENT_4660>;
type FragmentSelf4660 = NonNullable<FragmentResult4660>;

export type FragmentToken4660 =
  | FragmentSelf4660["__typename"]
  | FragmentSelf4660["typenameHint"] | FragmentToken4658 | FragmentToken4659;
