import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4302 } from "./fragment4302";
import type { FragmentToken4303 } from "./fragment4303";

export const FRAGMENT_4304 = gql(`
  fragment Fragment4304 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult4304 = ResultOf<typeof FRAGMENT_4304>;
type FragmentSelf4304 = NonNullable<FragmentResult4304>;

export type FragmentToken4304 =
  | FragmentSelf4304["__typename"]
  | FragmentSelf4304["typenameHint"] | FragmentToken4302 | FragmentToken4303;
