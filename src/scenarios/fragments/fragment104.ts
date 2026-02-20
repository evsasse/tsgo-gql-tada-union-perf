import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken102 } from "./fragment102";
import type { FragmentToken103 } from "./fragment103";

export const FRAGMENT_104 = gql(`
  fragment Fragment104 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult104 = ResultOf<typeof FRAGMENT_104>;
type FragmentSelf104 = NonNullable<FragmentResult104>;

export type FragmentToken104 =
  | FragmentSelf104["__typename"]
  | FragmentSelf104["typenameHint"] | FragmentToken102 | FragmentToken103;
