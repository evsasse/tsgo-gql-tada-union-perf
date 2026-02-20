import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken795 } from "./fragment795";
import type { FragmentToken796 } from "./fragment796";

export const FRAGMENT_797 = gql(`
  fragment Fragment797 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult797 = ResultOf<typeof FRAGMENT_797>;
type FragmentSelf797 = NonNullable<FragmentResult797>;

export type FragmentToken797 =
  | FragmentSelf797["__typename"]
  | FragmentSelf797["typenameHint"] | FragmentToken795 | FragmentToken796;
