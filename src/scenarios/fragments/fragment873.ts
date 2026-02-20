import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken871 } from "./fragment871";
import type { FragmentToken872 } from "./fragment872";

export const FRAGMENT_873 = gql(`
  fragment Fragment873 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult873 = ResultOf<typeof FRAGMENT_873>;
type FragmentSelf873 = NonNullable<FragmentResult873>;

export type FragmentToken873 =
  | FragmentSelf873["__typename"]
  | FragmentSelf873["typenameHint"] | FragmentToken871 | FragmentToken872;
