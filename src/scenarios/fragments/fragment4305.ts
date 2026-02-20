import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4303 } from "./fragment4303";
import type { FragmentToken4304 } from "./fragment4304";

export const FRAGMENT_4305 = gql(`
  fragment Fragment4305 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult4305 = ResultOf<typeof FRAGMENT_4305>;
type FragmentSelf4305 = NonNullable<FragmentResult4305>;

export type FragmentToken4305 =
  | FragmentSelf4305["__typename"]
  | FragmentSelf4305["typenameHint"] | FragmentToken4303 | FragmentToken4304;
