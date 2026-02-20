import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken907 } from "./fragment907";
import type { FragmentToken908 } from "./fragment908";

export const FRAGMENT_909 = gql(`
  fragment Fragment909 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult909 = ResultOf<typeof FRAGMENT_909>;
type FragmentSelf909 = NonNullable<FragmentResult909>;

export type FragmentToken909 =
  | FragmentSelf909["__typename"]
  | FragmentSelf909["typenameHint"] | FragmentToken907 | FragmentToken908;
