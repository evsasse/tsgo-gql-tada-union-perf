import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken652 } from "./fragment652";
import type { FragmentToken653 } from "./fragment653";

export const FRAGMENT_654 = gql(`
  fragment Fragment654 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult654 = ResultOf<typeof FRAGMENT_654>;
type FragmentSelf654 = NonNullable<FragmentResult654>;

export type FragmentToken654 =
  | FragmentSelf654["__typename"]
  | FragmentSelf654["typenameHint"] | FragmentToken652 | FragmentToken653;
