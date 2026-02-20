import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken896 } from "./fragment896";
import type { FragmentToken897 } from "./fragment897";

export const FRAGMENT_898 = gql(`
  fragment Fragment898 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult898 = ResultOf<typeof FRAGMENT_898>;
type FragmentSelf898 = NonNullable<FragmentResult898>;

export type FragmentToken898 =
  | FragmentSelf898["__typename"]
  | FragmentSelf898["typenameHint"] | FragmentToken896 | FragmentToken897;
